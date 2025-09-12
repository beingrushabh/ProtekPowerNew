// WriteBlog.jsx (updated for Firebase v9+)
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../../components/Layout';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { db, storage } from '../firebase'; // Import from updated firebase.js
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import Storage functions

const USERNAME = 'dad';
const PASSWORD = 'protek123';

export default function WriteBlog() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [heading, setHeading] = useState('');
  const [title, setTitle] = useState('');
  const [sections, setSections] = useState([]);
  const [imageURL, setImageURL] = useState('');
  const [imageFromPC, setImageFromPC] = useState(null);

  const login = () => {
    if (username === USERNAME && password === PASSWORD) {
      setAuth(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const addTextSection = () => setSections([...sections, { type: 'text', content: '' }]);
  const addImageSection = () => setSections([...sections, { type: 'image', src: '' }]);

  const handleImageUpload = async (idx, file) => {
    const storageRef = ref(storage, `blog_images/${file.name}`);
    
    // Upload file to Firebase Storage
    await uploadBytes(storageRef, file);
    
    // Get the file's URL
    const url = await getDownloadURL(storageRef);
    
    // Update section with the image URL
    const updated = [...sections];
    updated[idx].src = url;
    setSections(updated);
  };

  const handleImageURL = (idx, url) => {
    const updated = [...sections];
    updated[idx].src = url;
    setSections(updated);
  };

  const updateSection = (idx, value) => {
    const updated = [...sections];
    updated[idx].content = value;
    setSections(updated);
  };

  const saveBlog = async () => {
    try {
      // Prepare the blog data
      const blogData = {
        heading,
        title,
        date: new Date().toLocaleDateString(),
        sections
      };

      // Save blog to Firestore
      const postsCollection = collection(db, 'posts');
      await addDoc(postsCollection, blogData);

      // Show success message
      alert('Blog saved successfully!');
      navigate('/blog');
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('There was an error saving the blog. Please try again.');
    }
  };

  if (!auth) {
    return (
      <Layout>
        <div style={styles.container}>
          <div style={styles.card}>
            <h2 style={styles.title}>📝 Create New Blog</h2>

            <input
              style={styles.input}
              placeholder="Blog Heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
            <input
              style={styles.input}
              placeholder="Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {sections.map((section, idx) => (
              <div key={idx} style={{ marginBottom: '30px' }}>
                {section.type === 'text' ? (
                  <TiptapEditor
                    value={section.content}
                    onChange={(content) => updateSection(idx, content)}
                  />
                ) : (
                  <>
                    {section.src && (
                      <img
                        src={section.src}
                        alt="Uploaded"
                        style={styles.imagePreview}
                      />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(idx, e.target.files[0])}
                      style={styles.input}
                    />
                    <input
                      type="text"
                      placeholder="Or provide image URL"
                      onChange={(e) => handleImageURL(idx, e.target.value)}
                      style={styles.input}
                    />
                  </>
                )}
              </div>
            ))}

            <div style={styles.buttonGroup}>
              <button style={styles.buttonOutline} onClick={addTextSection}>
                + Rich Text Section
              </button>
              <button style={styles.buttonOutline} onClick={addImageSection}>
                + Image Section
              </button>
            </div>

            <button style={styles.buttonPrimary} onClick={saveBlog}>
              💾 Save Blog
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '40px auto' }}>
        <h2>Create New Blog</h2>
        <input
          style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
          placeholder="Blog Heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <input
          style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '20px' }}>
            {section.type === 'text' ? (
              <TiptapEditor
                value={section.content}
                onChange={(content) => updateSection(idx, content)}
              />
            ) : (
              <>
                {section.src && (
                  <img
                    src={section.src}
                    alt="Uploaded"
                    style={{ width: '100%', marginBottom: '10px' }}
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(idx, e.target.files[0])}
                />
                <input
                  type="text"
                  placeholder="Or provide image URL"
                  onChange={(e) => handleImageURL(idx, e.target.value)}
                />
              </>
            )}
          </div>
        ))}

        <button onClick={addTextSection}>Add Rich Text Section</button>
        <button onClick={addImageSection}>Add Image Section</button>
        <button onClick={saveBlog} style={{ backgroundColor: '#0066cc', color: 'white' }}>
          Save Blog
        </button>
      </div>
    </Layout>
  );
}

function TiptapEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '10px', background: '#fff' }}>
      <EditorContent editor={editor} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '60px auto',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#222',
    marginBottom: '30px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    marginBottom: '20px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  imagePreview: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '15px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px',
  },
  buttonOutline: {
    flex: 1,
    padding: '12px',
    border: '1px solid #0066cc',
    backgroundColor: '#fff',
    color: '#0066cc',
    fontWeight: 'bold',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  buttonPrimary: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#0066cc',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1.1rem',
    cursor: 'pointer',
  },
};
