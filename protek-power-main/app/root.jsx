import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <style>{`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
            background: #fff;
            color: #333;
          }
          .dark-mode {
            display: none;
          }
          @media (prefers-color-scheme: dark) {
            body {
              background: #fff;
              color: #333;
            }
            .light-mode {
              display: none;
            }
            .dark-mode {
              display: block;
            }
          }
          
          /* Power-themed hover effects */
          nav a:hover {
            color: #0066cc;
            text-shadow: 0 0 1px rgba(0, 102, 204, 0.3);
          }
          
          nav a::after {
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: #0066cc;
            transition: width 0.3s ease;
          }
          
          nav a:hover::after {
            width: 80%;
          }
          
          /* Electric pulse effect on hover */
          .power-pulse:hover {
            animation: pulse 1.5s infinite;
          }
          
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(0, 102, 204, 0.4);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(0, 102, 204, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(0, 102, 204, 0);
            }
          }
          /* Media Queries for Responsive Design */
          @media (min-width: 768px) {
            .why-choose-content {
              flex-direction: row !important;
              align-items: center;
            }
            
            .text-content {
              padding-right: 40px;
            }
        }
        /* Responsive grid for product carousel */
        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
  
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
  
        @media (max-width: 480px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      /* Tracer line animation */
      @keyframes trace-logo-border {
        0% {
          top: 0;
          left: 10%;
          width: 20px;
          transform: translateX(0) rotate(0deg);
        }
        25% {
          top: 0;
          left: 90%;
          width: 20px;
          transform: translateX(-100%) rotate(0deg);
        }
        26% {
          top: 0;
          left: 90%;
          width: 2px;
          transform: translateX(0) rotate(90deg);
        }
        50% {
          top: 100%;
          left: 90%;
          width: 2px;
          transform: translateY(-100%) rotate(90deg);
        }
        51% {
          top: 100%;
          left: 90%;
          width: 20px;
          transform: translateY(0) rotate(180deg);
        }
        75% {
          top: 100%;
          left: 10%;
          width: 20px;
          transform: translateX(0) rotate(180deg);
        }
        76% {
          top: 100%;
          left: 10%;
          width: 2px;
          transform: translateY(0) rotate(270deg);
        }
        100% {
          top: 0;
          left: 10%;
          width: 2px;
          transform: translateY(0) rotate(270deg);
        }
      }
        /* Product Card Hover Effects */
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 102, 204, 0.15);
        }
        
        .product-card:hover img {
          transform: scale(1.08);
        }
        
        .product-card:hover .overlay {
          background-color: rgba(0, 102, 204, 0.1);
        }
        
        .product-card:hover .category {
          transform: translateY(3px);
          background-color: rgba(0, 102, 204, 1);
        }
      /* Replace the ::after pseudo-element with a cleaner version */
      .logo-container::after {
        display: none; /* Remove the previous animation */
      }
        /* Support section responsive adjustments */
        @media (min-width: 768px) {
          .support-content {
            flex-direction: row !important;
          }
          
          .map-column {
            padding-left: 20px;
          }
          
          .text-column {
            padding-right: 20px;
          }
        }
            /* Dropdown animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Dropdown item hover effect */
  .dropdown-item {
    position: relative;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  .product-tab-content {
    animation: fadeIn 0.3s ease-out;
  }
  
  .product-gallery-zoom {
    animation: fadeIn 0.5s ease-out;
  }
  
  /* Responsive styles for product detail page */
  @media (max-width: 768px) {
    .product-content {
      flex-direction: column !important;
    }
    
    .product-images, .product-info {
      max-width: 100% !important;
    }
    
    .tabs-header {
      flex-wrap: wrap;
    }
    
    .tab-button {
      flex: 1;
      min-width: 120px;
    }
  }
  .dropdown-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background-color: rgba(0, 102, 204, 0.1);
    transition: width 0.2s ease;
  }
  
  .dropdown-item:hover::before {
    width: 4px;
    background-color: #0066cc;
  }
  
  /* Arrow rotation on hover */
  .nav-dropdown:hover .arrow {
    transform: rotate(180deg);
  }
      /* Arrow animation */
  .arrow-up {
    transform: rotate(180deg);
  }
  
  /* Dropdown animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Enhanced dropdown item hover effect */
  .dropdown-item:hover {
    background-color: rgba(0, 102, 204, 0.05);
    border-left-color: #0066cc !important;
  }
  
  .dropdown-item:hover .item-name {
    color: #0066cc;
  }
  /* Dropdown animations and styles */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .arrow-up {
    transform: rotate(180deg);
  }
  
  .dropdown-item:hover {
    background-color: rgba(0, 102, 204, 0.05);
    border-left-color: #0066cc !important;
    color: #0066cc !important;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .products-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  
  @media (max-width: 480px) {
    .products-grid {
      grid-template-columns: 1fr !important;
    }
    .category-filter {
      justify-content: center;
    }
  }
        `}</style>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main style={{ padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre style={{ width: '100%', padding: '1rem', overflow: 'auto' }}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}