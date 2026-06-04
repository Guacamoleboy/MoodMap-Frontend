<div align="LEFT">

# MoodMap
**Keeping track of YOUR mood.**\
\
**Frontend Repository**

[![Visit MoodMap](https://img.shields.io/badge/Visit%20MoodMap-ffffff?style=for-the-badge&color=202940)](http://moodmap.guacamoleboy.dk)
[![Visit Devlog](https://img.shields.io/badge/Visit%20Devlog-ffffff?style=for-the-badge&color=f99e00)](http://moodmap.guacamoleboy.dk/dev-log)

</div>

---

### MoodMap's Mission
**Data tracking for Clinicians and Clients.**

Providing data directly to your clinician and yourself to show **real-time progress**.

> **The Problem:**
>
> If you've been to a clinician — whether for physical or mental health — you're often left alone for long periods between checkups. After months, you're asked: *"How do you feel?"* or *"Any improvements?"*
> This is an **"on the spot"** question. Patients describe how they *think* they've progressed, which is often inaccurate. This lack of objective data can lead to incorrect medication, inefficient follow-ups, and long-term consequences.

---

### Links

**Devlog / Portfolio Website**
> https://moodmap.guacamoleboy.dk/devlog

**Website**
> https://moodmap.guacamoleboy.dk

**API Backend**
> https://api.guacamoleboy.dk/v1

**FigJam**
> https://www.figma.com/board/Levg7LnnC7l8fOcPdRsfi0/MoodMap-Brainstorm?node-id=0-1&t=sBfbRan1sVXkpxLI-1

**YouTube Overview**
> https://youtu.be/dTqKWk7P7eo?si=byT6isvBsGlhGjj_

---

### User Stories

**Visit this link for User Stories or go to "Wiki" under this repo**
> https://github.com/Guacamoleboy/MoodMap-Frontend/wiki/User-Stories

---

### Architecture

The application follows a component-based architecture where components are organized directly within the src directory. This structure was chosen because it provides a simple and effective approach for small to medium-sized React applications.

During the planning phase, different architectural patterns were evaluated, including feature-based and shared component structures. While feature-based architecture offers excellent scalability for larger applications, a component-oriented structure was considered more suitable for the scope of this project.

A key focus throughout development was maintaining consistency in file organization, naming conventions, and component responsibilities. This helped improve maintainability and made the codebase easier to navigate as the project grew.

---

### Routing

Navigation is handled using React Router, allowing the application to function as a Single Page Application (SPA) with client-side routing.

---

### Folder Structure

```text
src/
├── api/
│   ├── client.js
│   └── endpoints/
│       └── auth.js
│
├── assets/
│
├── components/
│   ├── Header/
│   │   ├── Header.hooks.js
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   │
│   └── Footer/
│       ├── Footer.hooks.js
│       ├── Footer.jsx
│       └── Footer.module.css
│
├── config/
│   └── roles.js
│
├── context/
│   ├── AuthContext.js
│   └── AuthProvider.jsx
│
├── hooks/
│   ├── useAuth.js
│   └── useTheme.js
│
├── layout/
│   ├── AppLayout.jsx
│   └── AuthLayout.jsx
│
├── pages/
│   ├── Home.jsx
│   └── About.jsx
│
├── routes/
│   ├── AppRoutes.jsx
│   ├── ProtectedRoutes.jsx
│   └── RoleRoutes.jsx
│
├── services/
│   └── N/A
│
├── styles/
│   ├── animations.css
│   └── style.css
│
├── utils/
│   └── token.js
│
├── App.jsx
└── main.jsx
```

---

### Development Notes

One of the main challenges was maintaining a clear project structure as the number of components increased. This highlighted the importance of consistent naming conventions and thoughtful folder organization.

Throughout the project, I gained a deeper understanding of React component composition, state management, routing, and the architectural decisions involved in frontend application development.

Based on feedback and review sessions with my instructor, Thomas, the primary objective of this project was not necessarily to complete every planned feature. Instead, the focus was on achieving the learning objectives of the course and developing a solid understanding of modern frontend development practices.

Considerable effort was invested throughout the development process, with a strong focus on continuous learning, problem-solving, and applying new concepts in practice. While the final solution does not represent a finished production-ready application, it reflects the progress made toward the intended educational goals.

The project also highlighted several areas for improvement. Looking back, there are architectural decisions, development workflows, and implementation details that could be refined further. Future projects would benefit from earlier planning, more structured prioritization, and increased development efficiency. These reflections have provided valuable insights that will help improve both technical skills and project execution going forward.

---

### Technology

| Component | Technology |
| :--- | :--- |
| **Language** | JavaScript (ES2024+) |
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Routing** | React Router 7 |
| **Type Checking** | PropTypes |
| **Animations** | DotLottie React |
| **Linting** | ESLint 10 |
| **Package Manager** | npm |
| **Version Control** | Git & GitHub |
| **Dev Log** | [![Visit Devlog](https://img.shields.io/badge/Visit%20Devlog-ffffff?style=for-the-badge&color=f99e00)](http://moodmap.guacamoleboy.dk/dev-log) |

---

<div align="center">
<sub>MoodMap - Keeping track of YOUR mood.</sub>
</div>
