 <h1>📋 MERN Stack Task Manager</h1>

  <p>A full-stack Task Manager web application built using the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js) with TypeScript, JWT Authentication, Formik & Yup validation, and responsive UI powered by Tailwind CSS.</p>

  <hr/>

  <h2>🚀 Live Demo</h2>
  <ul>
    <li><strong>Frontend (Vercel):</strong> <a href="https://task-management-phi-vert.vercel.app/login" target="_blank">https://task-management-phi-vert.vercel.app/login</a></li>
    <li><strong>Backend (Render):</strong> <a href="https://task-management-7ffs.onrender.com" target="_blank">https://task-management-7ffs.onrender.com</a></li>
  </ul>

  <hr/>

  <h2>🧑‍💻 Test Credentials</h2>
  <ul>
    <li>Email: <code>test@example.com</code></li>
    <li>Password: <code>123456</code></li>
  </ul>

  <hr/>

  <h2>📦 Features</h2>
  <ul>
    <li>User registration and login</li>
    <li>JWT-based authentication</li>
    <li>Create, Read, Update, Delete (CRUD) tasks</li>
    <li>Protected routes with React Router</li>
    <li>Formik and Yup validation for forms</li>
    <li>Responsive UI with Tailwind CSS</li>
    <li>Toast notifications for feedback</li>
    <li>Loading and error handling states</li>
  </ul>

  <hr/>

  <h2>🗂️ Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React + TypeScript, Tailwind CSS, Axios, Formik, Yup, Lucide Icons</li>
    <li><strong>Backend:</strong> Node.js, Express.js, Mongoose</li>
    <li><strong>Database:</strong> MongoDB Atlas</li>
    <li><strong>Deployment:</strong> Vercel (Frontend), Render (Backend)</li>
  </ul>

  <hr/>

  <h2>⚙️ Installation & Setup</h2>

  <h3>Backend</h3>
  <pre><code>
git clone https://github.com/your-username/task-manager-backend
cd task-manager-backend
npm install
# Create a .env file and add:
# PORT=5000
# MONGO_URI=your_mongo_connection_string
# JWT_SECRET=your_jwt_secret
npm run dev
  </code></pre>

  <h3>Frontend</h3>
  <pre><code>
git clone https://github.com/your-username/task-manager-frontend
cd task-manager-frontend
npm install
# Create a .env file and add:
# VITE_API_BASE_URL=https://task-management-7ffs.onrender.com/api
npm run dev
  </code></pre>

  <hr/>

  <h2>📁 Folder Structure (Frontend)</h2>
  <pre><code>
src/
├── components/
├── context/
├── pages/
├── routes/
├── services/
├── types/
  </code></pre>

  <hr/>

  <h2>✅ Deployment Links</h2>
  <ul>
    <li>MongoDB Atlas - cloud database</li>
    <li>Vercel - <a href="https://task-management-phi-vert.vercel.app/login" target="_blank">https://task-management-phi-vert.vercel.app/</a></li>
    <li>Render - <a href="https://task-management-7ffs.onrender.com/" target="_blank">https://task-management-7ffs.onrender.com/</a</li>
  </ul>

  <hr/>

  <h2>📌 Notes</h2>
  <ul>
    <li>Ensure both servers are running before testing functionality.</li>
    <li>Make sure to use environment variables for API URLs and secrets.</li>
    <li>UI is responsive and works on desktop and mobile devices.</li>
  </ul>

  <hr/>

  <h2>✨ Bonus Features Implemented</h2>
  <ul>
    <li>Formik + Yup validation</li>
    <li>Toast Notifications (react-hot-toast)</li>
    <li>TailwindCSS for UI</li>
    <li>Lucide icons for actions</li>
    <li>Loading indicators</li>
  </ul>
