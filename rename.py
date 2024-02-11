import os
def rename(filePath):
	html = "./docs" + filePath + ".html"
	file = open(html, "r")
	content = file.read()
	file.close()

	file = open(html, "w")
	file.write(content.replace("/_next/static", "./_next/static"))
	file.write(content.replace("/images", "./images"))
	file.close()

	txt = "./docs" + filePath + ".txt"
	file = open(txt, "r")
	content = file.read()
	file.close()

	file = open(txt, "w")
	file.write(content.replace("/_next/static", "./_next/static"))
	file.write(content.replace("/images", "./images"))
	file.close()

os.rename("./out", "./docs")
f = open("./docs/.nojekyll", "x")
rename("/index.html")
rename("/404.html")
rename("/docs.html")
rename("/docs/installation.html")
rename("/docs/mdx.html")