import os
def rename(filePath):
	html = "./out" + filePath
	file = open(html, "r")
	content = file.read()
	file.close()

	file = open(html, "w")
	file.write(content.replace("/_next/static", "https://sirebutitsunique.github.io/cp-notes/_next/static"))
	file.write(content.replace("/images", "https://sirebutitsunique.github.io/cp-notes/images"))
	file.close()

f = open("./out/.nojekyll", "x")
rename("/index.html")
rename("/index.txt")
rename("/404.html")
rename("/docs.html")
rename("/docs.txt")
rename("/docs/installation.html")
rename("/docs/installation.txt")
rename("/docs/mdx.html")
rename("/docs/mdx.txt")