/* ===== محتوى الموقع | Site content =====
   عشان تضيف فيديو: حط الملف في فولدر videos وضيف سطر جديد في works (من غير حد أقصى).
   kind:"reel" = ريل عمودي (3 في الصف)  |  kind:"long" = فيديو طويل (2 في الصف)
   عشان تضيف تقييم: حط الصورة أو التسجيل في فولدر reviews وضيف سطر في testi.
   kind: "image" أو "audio" أو "video"  |  name = اسم العميل (اختياري)  |  photo = صورة العميل (اختياري)
   عشان تمسح حاجة: امسح السطر بتاعها (أو حط قبله //) وامسح الملف من الفولدر.
*/
window.SITE = {
  intro: "videos/intro.mp4",
  works: [
    { kind: "reel", url: "videos/reel-1.mp4" },
    { kind: "reel", url: "videos/reel-2.mp4" },
    { kind: "reel", url: "videos/reel-3.mp4" },
    { kind: "reel", url: "videos/reel-4.mp4" },
    { kind: "reel", url: "videos/reel-5.mp4" },
    { kind: "long", url: "videos/long-1.mp4" },
    { kind: "reel", url: "videos/reel-6.mp4" }
  ],
  testi: [
    { kind: "image", name: "", photo: "", url: "reviews/review-1.webp" },
    { kind: "image", name: "", photo: "", url: "reviews/review-2.webp" }
  ]
};
