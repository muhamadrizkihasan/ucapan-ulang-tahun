$(document).ready(function () {
   $(".enter").click(function () {
      unlock($(".enter"));
      setTimeout(playAudio, 700); 
   });
});

function playAudio() {
   const audio = document.getElementById('unconditionally-audio');
   audio.play().then(() => {
      console.log("Audio is playing");
   }).catch(error => {
      console.error("Error playing audio:", error);
   });
}

function open(left, right, button) {
   gsap.to(left, 1.5, {
      width: 0
   });
   gsap.to(right, 1.5, {
      width: 0
   });
   gsap.to(button, 1.5, {
      "margin-left": "-60px",
      onComplete: function () {
         left.parent().remove();
         button.remove();
      }
   });
}

function unlock(el) {
   gsap.to(el, 0.5, {
      transform: "rotate(90deg)",
      onComplete: function () {
         open($(".door .left"), $(".door .right"), el);
      }
   });

   var textWrapper = document.querySelector('.ml10 .letter');
   if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
   } else {
      console.error("Element '.ml10 .letter' not found");
   }

   var textWrapperxa = document.querySelector('.ml10 .letterz');
   if (textWrapperxa) {
      textWrapperxa.innerHTML = textWrapperxa.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
   } else {
      console.error("Element '.ml10 .letterz' not found");
   }

   if (textWrapper && textWrapperxa) {
      anime.timeline({loop: true})
      .add({
         targets: '.ml10 .letter',
         rotateY: [-90, 0],
         duration: 9000,
         delay: 1500
      }).add({
         targets: '.ml10',
         opacity: 0,
         duration: 1000,
         easing: "easeOutExpo",
         delay: 100000000000000000000
      })
      .add({
         targets: '.ml10 .letterz',
         rotateY: [-90, 0],
         duration: 9000,
         delay: 1500
      }).add({
         targets: '.ml10',
         opacity: 0,
         duration: 1000,
         easing: "easeOutExpo",
         delay: 100000000000000000000
      });
   }
}
