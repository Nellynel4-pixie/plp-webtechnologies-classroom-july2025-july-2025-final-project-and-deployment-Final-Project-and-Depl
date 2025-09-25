// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Form Validation and Submission
const contactForm = document.getElementById("contact-form")
const successMessage = document.getElementById("success-message")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Clear previous errors
    clearErrors()

    // Validate form
    let isValid = true

    // Name validation
    const name = document.getElementById("name").value.trim()
    if (name.length < 2) {
      showError("name-error", "Name must be at least 2 characters long")
      isValid = false
    }

    // Email validation
    const email = document.getElementById("email").value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      showError("email-error", "Please enter a valid email address")
      isValid = false
    }

    // Phone validation (optional but if provided, should be valid)
    const phone = document.getElementById("phone").value.trim()
    if (phone && !/^[+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-$$$$]/g, ""))) {
      showError("phone-error", "Please enter a valid phone number")
      isValid = false
    }

    // Subject validation
    const subject = document.getElementById("subject").value
    if (!subject) {
      showError("subject-error", "Please select a subject")
      isValid = false
    }

    // Message validation
    const message = document.getElementById("message").value.trim()
    if (message.length < 10) {
      showError("message-error", "Message must be at least 10 characters long")
      isValid = false
    }

    if (isValid) {
      // Simulate form submission
      contactForm.style.display = "none"
      successMessage.style.display = "block"

      // In a real application, you would send the data to a server
      console.log("Form submitted successfully:", {
        name,
        email,
        phone,
        subject,
        message,
        newsletter: document.getElementById("newsletter").checked,
      })

      // Reset form after 3 seconds (for demo purposes)
      setTimeout(() => {
        contactForm.reset()
        contactForm.style.display = "block"
        successMessage.style.display = "none"
      }, 3000)
    }
  })
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId)
  if (errorElement) {
    errorElement.textContent = message
    errorElement.style.display = "block"
  }
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error-message")
  errorElements.forEach((element) => {
    element.textContent = ""
    element.style.display = "none"
  })
}

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

document.addEventListener("DOMContentLoaded", () => {
  // Wait a bit for all elements to be rendered
  setTimeout(() => {
    // Add animation classes to feature cards
    const featureCards = document.querySelectorAll(".feature-card")
    featureCards.forEach((card, index) => {
      card.classList.add("fade-in")
      card.style.transitionDelay = `${index * 0.2}s`
      observer.observe(card)
    })

    // Add animation classes to team members
    const teamMembers = document.querySelectorAll(".team-member")
    teamMembers.forEach((member, index) => {
      member.classList.add("fade-in")
      member.style.transitionDelay = `${index * 0.2}s`
      observer.observe(member)
    })

    // Add animation classes to value items
    const valueItems = document.querySelectorAll(".value-item")
    valueItems.forEach((item, index) => {
      item.classList.add("fade-in")
      item.style.transitionDelay = `${index * 0.2}s`
      observer.observe(item)
    })

    const allAnimatedElements = document.querySelectorAll(".fade-in")
    allAnimatedElements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
      if (isInViewport) {
        element.classList.add("visible")
      }
    })
  }, 100)
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.backgroundColor = "#ffffff"
    header.style.backdropFilter = "none"
  }
})

const images = document.querySelectorAll('img[loading="lazy"]')
images.forEach((img) => {
  if (img.dataset.src) {
    img.src = img.dataset.src
  }
})

// Add smooth hover effects to buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)"
  })

  button.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Console welcome message
console.log("%c🌟 Welcome to PARK MART! 🌟", "color: #22c55e; font-size: 20px; font-weight: bold;")
console.log("%cThis website was built with HTML5, CSS3, and JavaScript", "color: #6b7280; font-size: 14px;")
