# 📚 SAT EdTech Platform — Interactive Learning, Online Exams & Resource Management

🚀 **Live Demo:** [satbeta-frontend.vercel.app](https://satbeta-frontend-b2htkqpaa-reza-babd.vercel.app)

---

### 🌐 Navigation Bar Specifications

#### 📌 Positioning & Behavior
* **Sticky Navigation:** Nav is fixed to the top (`sticky top-0 z-50`) during vertical page scrolling to maintain continuous accessibility.

#### 📱 Mobile Layout (`< 640px` / Extra Small Devices)
* **Layout System:** Flexbox Layout
* **Visibility Rules:**
  * **Visible:** Brand Name (Logo) & Authentication Actions (`Log In` / `Register`).
  * **Hidden:** Navigation Links.

---

#### 💻 Responsive Layout (`≥ 640px` / Small & Larger Devices)
* **Layout System:** 12-Column CSS Grid Layout
* **Visibility Rules:** All elements (Brand Name, Scrollable Navigation Links with controls, and Auth Actions) are fully visible in structured grid columns.


### 🎨 Banner Component
- **Responsive Layout:** Designed with a 12-column grid layout (`sm:grid-cols-12`) that smoothly adjusts for mobile (`1 column`) and desktop screens.
- **Styling & Gradient:** Modern background styling using Tailwind CSS custom color gradients (`from-blue-200 via-purple-50 to-cyan-100`).
- **Typography & Alignment:** Features dynamic headings and justified descriptive paragraphs (`text-justify`) to maintain edge-to-edge text symmetry.
- **UI Components:** Integrated [DaisyUI](https://daisyui.com/) interactive buttons (`btn btn-accent`) configured with responsive visibility (`hidden sm:block`).