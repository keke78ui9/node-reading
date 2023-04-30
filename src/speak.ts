import { speakOption } from "./interfaces/speakOption";

function speak(option: speakOption) {
    
    var voices = window.speechSynthesis;

    const utterThis = new SpeechSynthesisUtterance(option.content);

    voices.speak(utterThis);
}

export { speak };