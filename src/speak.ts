import { speakOption } from "./interfaces/speakOption";
import { getContent } from './helpers/readingHelpers';

function speak(option: speakOption):boolean {    

    const content = getContent(option);
    if (!content) {
        return false;
    }

    var voices = window.speechSynthesis;

    const utterThis = new SpeechSynthesisUtterance(content);

    voices.speak(utterThis);

    return true;
}

export { speak };