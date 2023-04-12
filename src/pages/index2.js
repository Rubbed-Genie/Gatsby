import React from "react"
import ".css/style.css"

const IndexPage = () => {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Rubbed Genie | Matt Daly</title>
        <meta name="description" content="~~making~wishes~come~true~~" />
        <meta name="author" content="Matt Daly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="rubbed genie, visuals, projection art, interactive,unity3D, genie, wishes, making wishes come true"
        />
        <link rel="icon" href="TemplateData/favicon.png" />
        <link rel="stylesheet" href="TemplateData/style.css" />
        <link rel="stylesheet" href="css/styles.css" />
        <script src="TemplateData/UnityProgress.js"></script>
        <script src="Build/UnityLoader.js"></script>
        <script>
          var unityInstance = UnityLoader.instantiate(
            "unityContainer",
            "Build/webrubr.json",
            { onProgress: UnityProgress }
          )
        </script>
        <script>
          var a = 1
          function openNav() {
            var x = document.getElementById("mySidepanel")
            if (a == 1) {
              x.style.width = "100%"
              a = 0
            } else {
              x.style.width = "0"
              a = 1
            }
          }
        </script>
      </head>
      <body>
        <div className="headlogo" onclick="unityInstance.SetFullscreen(1)">
          <img src="TemplateData/webgl-logo.png" width: 204px; />
        </div>

        <div id="mySidepanel" className="sidepanel">
          <a href="https://rubbedgenie.com/index.html">Home</a>
          <a href="https://rubbedgenie.com">Projects</a>
          <a href="https://www.instagram.com/rubbed_genie/">About</a>
          <a href="https://rubbedgenie.com/contact/">Contact</a>
        </div>

        <button className="openbtn" onclick="openNav()">
          ☰
        </button>

        <div className="webgl-content">
          <div id="unityContainer" style={{ width: "960px", height: "600px" }} />
          <div className="footer">
            <div className="fullscreen" onclick="unityInstance.SetFullscreen(1)" />
          </div>
        </div>
      </body>
    </html>
  )
}

export default IndexPage