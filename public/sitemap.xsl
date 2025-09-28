<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>ALPHA HKU Sitemap</title>
        <style>
          body {
            font-family: sans-serif;
            max-width: 60vw;
            margin-left: auto;
            margin-right: auto;
          }
          @media (max-width: 600px) {
            body {
              max-width: 100vw;
              margin: 1rem;
            }
          }
          header { 
            display: flex; 
            align-items: center; 
            gap: 0.75rem;
            margin-bottom: 0.75rem;
          }
          header img { 
            width: 173px;
            height: 44px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid lightgrey;
          }
          th, td {
            padding: 0.625rem;
            border-bottom: 1px solid lightgrey;
          }
          tr:nth-child(even) td {
            background: #FAFAFA;
          }
        </style>
      </head>
      <body>
        <header>
          <img src="/navigation-bar.webp" alt="ALPHA HKU"/>
          <h1>Sitemap</h1>
        </header>

        <table>
          <thead>
            <tr>
              <th>
                <xsl:choose>
                  <xsl:when test="/s:sitemapindex">Sitemap</xsl:when>
                  <xsl:otherwise>URL</xsl:otherwise>
                </xsl:choose>
              </th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="/s:sitemapindex/s:sitemap | /s:urlset/s:url">
              <tr>
                <td>
                  <a href="{s:loc}">
                    <xsl:value-of select="s:loc"/>
                  </a>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
