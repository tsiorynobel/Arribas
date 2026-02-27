 function showPage(id) {
          document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
          document.getElementById(id).classList.add("active");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
 function toggleFaq(item) {
          const answer = item.querySelector(".faq-answer");
          const isOpen = item.classList.contains("open");
          document.querySelectorAll(".faq-item").forEach(i => {
            i.classList.remove("open");
            i.querySelector(".faq-answer").classList.remove("open");
          });
          if (!isOpen) {
            item.classList.add("open");
            answer.classList.add("open");
          }
        }
function handleContactForm(e) {
            e.preventDefault();
            const btn = e.target.querySelector('.btn-form-submit');
            btn.textContent = '✓ Message envoyé !';
            btn.style.background = '#2d7a4f';
            btn.disabled = true;
            setTimeout(() => {
              btn.innerHTML = 'Envoyer ma demande <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
              btn.style.background = '';
              btn.disabled = false;
              e.target.reset();
            }, 3000);
          }

        