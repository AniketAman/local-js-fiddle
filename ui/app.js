{
  window.addEventListener("DOMContentLoaded", event => {
    const fileName = window.location.search.substring(1).split("=")[1];
    fetch(`/getStatus/${fileName}`).then(res => {
      res.json().then(({ js, html, css, isNew }) => {
        // addCodeMirror(html, js, css);
        if (isNew) {
          // do nothing;
        } else {
          document.querySelector("#html").value = html;
          document.querySelector("#css").value = css;
          document.querySelector("#js").value = js;
          addCodeMirror(html, js, css);
          refreshIframe();
        }
      });
    });
  });

  window.addEventListener("keypress", e => {
    if (e.ctrlKey && e.code == "Enter") {
      console.log(e);
      refreshWindow();
    }
  });

  function addCodeMirror(html, js, css) {
    //{value: myTextArea.value}
    const htmlEd = CodeMirror.fromTextArea(document.getElementById("html"), {
      lineNumbers: true,
      value: html,
      htmlMode: true,
      mode: "text/html",
      matchingBracket: true,
      theme: "blackboard"
    });
    window.ht = htmlEd;
    const cssEd = CodeMirror.fromTextArea(document.getElementById("css"), {
      lineNumbers: true,
      value: css,
      matchingBracket: true,
      theme: "blackboard"
    });
    const jsEd = CodeMirror.fromTextArea(document.getElementById("js"), {
      lineNumbers: true,
      value: js,
      mode: "javascript",
      matchingBracket: true,
      theme: "blackboard"
    });
  }

  function refreshWindow() {
    const html = document.querySelector("#html").value;
    const css = document.querySelector("#css").value;
    const js = document.querySelector("#js").value;
    const fileName = window.location.search.substring(1).split("=")[1];
    // const template = generateTemplate(html, css, js);
    // iframe.append(generateIframe(template));
    fetch("/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ js, css, html, fileName })
    }).then(res => {
      res.json().then(result => {
        setTimeout(() => {
          refreshIframe();
        }, 500);
      });
    });
  }

  function refreshIframe() {
    const fileName = window.location.search.substring(1).split("=")[1];
    const iframe = document.querySelector("#iframe");
    iframe.contentWindow.location = `/result/${fileName}.html`;
  }

  function generateIframe(template) {
    const iframe = document.createElement("iframe");
    iframe.innerHTML = template;
    return iframe;
  }
}
