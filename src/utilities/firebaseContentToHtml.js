var Latex = require("react-latex");

export default function firebaseContentToHtml(lessonParagraphs) {
	let htmlContent = [];
	if (lessonParagraphs) {
		lessonParagraphs.forEach((lessonParagraph) => {
			let i = 0;
			while (lessonParagraph[i]) {
				let sentenceType = Object.keys(lessonParagraph[i])[0];
				let sentencContent = lessonParagraph[i][sentenceType];
				switch (sentenceType) {
					case "text":
						htmlContent.push(<Latex>{sentencContent}</Latex>);
						break;
					case "iamge":
						htmlContent.push(<iamge>{sentencContent}</iamge>);
						break;
					case "video":
						htmlContent.push(<video>{sentencContent}</video>);
						break;
					case "question":
						htmlContent.push(<div>{sentencContent}</div>);
						break;
					default:
						htmlContent.push(<div>{sentencContent}</div>);
				}
				i++;
			}
		});
	}
	return htmlContent;
}
