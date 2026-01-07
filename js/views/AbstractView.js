export default class AbstractView {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }

    async executeViewScript() {
        // To be overridden by views that need to attach event listeners after rendering
    }
}
