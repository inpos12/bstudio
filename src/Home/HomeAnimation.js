$(window).ready(function () {
  $(window).scroll(function () {
    const title = $(".title");
    const description = $(".description");
    const scroll = $(window).scrollTop();

    //Title 애니메이션 실행 함수
    function TitleApplyTransformOpacity(element) {
      element.css({ transform: "translateX(0)", opacity: "1" });
    }
    // Title 애니메이션 비활성화 함수
    function TitleDisableTransformOpacity(element) {
      element.css({ transform: "translateX(-20%)", opacity: "0" });
    }
    // Description 에니메이션 실행 함수
    function DescriptionApplyTransformOpacity(element) {
      element.css({ transform: "translateY(0)", opacity: "1" });
    }
    // Description 에니메이션 비활성화 함수
    function DescriptionDisableTransfromOpacity(element) {
      element.css({ transform: "translateY(20%)", opacity: "0" });
    }
    //1번째 Section 애니메이션
    if (scroll >= title.eq(0).position().top / 2 / 2) {
      TitleApplyTransformOpacity(title.eq(0));
    } else {
      TitleDisableTransformOpacity(title.eq(0));
    }
    if (scroll >= description.eq(0).position().top / 2) {
      DescriptionApplyTransformOpacity(description.eq(0));
    } else {
      DescriptionDisableTransfromOpacity(description.eq(0));
    }
    //2번째 Section 애니메이션
    if (scroll >= title.eq(1).position().top / 1.5) {
      TitleApplyTransformOpacity(title.eq(1));
    } else {
      TitleDisableTransformOpacity(title.eq(1));
    }
    if (scroll >= description.eq(1).position().top / 1.4) {
      DescriptionApplyTransformOpacity(description.eq(1));
    } else {
      DescriptionDisableTransfromOpacity(description.eq(1));
    }
    //3번째 Section 애니메이션
    const Section3 = $("#section-3");
    const Section3Top = Section3.position().top;
    if (scroll >= Section3Top / 1.4) {
      TitleApplyTransformOpacity(title.eq(2));
    } else {
      TitleDisableTransformOpacity(title.eq(2));
    }
    if (scroll >= Section3Top / 1.3) {
      setTimeout(() => {
        DescriptionApplyTransformOpacity(description.eq(2));
      }, 500);
    } else {
      DescriptionDisableTransfromOpacity(description.eq(2));
    }
    // 4번째 Section 애니메이션
    if (scroll >= title.eq(3).position().top / 1.4) {
      TitleApplyTransformOpacity(title.eq(3));
    } else {
      TitleDisableTransformOpacity(title.eq(3));
    }
    if (scroll >= description.eq(3).position().top / 1.3) {
      DescriptionApplyTransformOpacity(description.eq(3));
    } else {
      DescriptionDisableTransfromOpacity(description.eq(3));
    }
    if (scroll >= title.eq(4).position().top / 1.3) {
      TitleApplyTransformOpacity(title.eq(4));
    } else {
      TitleDisableTransformOpacity(title.eq(4));
    }
    if (scroll >= description.eq(5).position().top / 1.3) {
      DescriptionApplyTransformOpacity(description.eq(4));
      setTimeout(() => {
        DescriptionApplyTransformOpacity(description.eq(5));
      }, 500);
    } else {
      DescriptionDisableTransfromOpacity(description.eq(4));
      DescriptionDisableTransfromOpacity(description.eq(5));
    }
  });
});
