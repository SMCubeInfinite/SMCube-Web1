function fontSizeChanger() {
        const fontSizeValue = document.getElementById('font-size');
        const textArea = document.getElementById('text-area');

        if (fontSizeValue.value == '6px') {
                textArea.style.fontSize = "6px";
        } else if (fontSizeValue.value == '8px') {
                textArea.style.fontSize = "8px";
        } else if (fontSizeValue.value == '10px') {
                textArea.style.fontSize = "10px";
        } else if (fontSizeValue.value == '12px') {
                textArea.style.fontSize = "12px";
        } else if (fontSizeValue.value == '14px') {
                textArea.style.fontSize = "14px";
        } else if (fontSizeValue.value == '16px') {
                textArea.style.fontSize = "16px";
        } else if (fontSizeValue.value == '18px') {
                textArea.style.fontSize = "18px";
        } else if (fontSizeValue.value == '20px') {
                textArea.style.fontSize = "20px";
        } else if (fontSizeValue.value == 'default') {
                textArea.style.fontSize = "12px";
        }
}
const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
        const textArea = document.getElementById('text-area');
        const saveType = document.getElementById('save-type');
        const saveName = document.getElementById('file-name');
        if (textArea.value != "") {
                const blob = new Blob([textArea.value], { type: saveType.value });
                const fileUrl = URL.createObjectURL(blob);
                const linkAnchor = document.createElement('a');
                if (saveName.value != "") {
                        linkAnchor.download = saveName.value;
                } else {
                        linkAnchor.download = "MrMasterMind";
                }
                linkAnchor.href = fileUrl;
                linkAnchor.click();
        }
});
