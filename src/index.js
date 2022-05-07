$(() => {
  katex.render("\\text{Lazy2TeX}", document.getElementById("title"), {
    throwOnError: false,
  });
  $("#plaintext").keyup(() => {
    let parser = new AsciiMathParser();
    let plaintext = $.trim($("#plaintext").val());
    //      let latex = plaintext
    //           .replace(/\((.*?)\)\/\((.*?)\)/g, "\\frac{$1}{$2}")
    //           .replace(/sqrt\((.*?)\)/g, "\\sqrt{$1}");
    let latex = parser.parse(`"${plaintext}"`);
    let textLatex = latex
      .replace(/\} (.*?) \\text\{/g, "} $$$1$$ \\text{")
      .replace(/ ?\\text\{(.*?)\} ?/g, "$1");
    $("#latex").html(textLatex);
    katex.render(latex, document.getElementById("render"), {
      throwOnError: false,
    });
  });
});
