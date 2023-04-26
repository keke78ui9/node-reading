import { SpeakOption } from "./speakOption";

function speak(option: SpeakOption) {
    
    var voices = window.speechSynthesis;

    const utterThis = new SpeechSynthesisUtterance(option.content);

    voices.speak(utterThis);
}

export { speak };