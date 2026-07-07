let theme = "Light";
let subscribers = [];

const ThemeService = {
    
    attach(subscriber) {
        if (!subscribers.includes(subscriber)) {
            subscribers.push(subscriber);
        }
    },
    
    detach(subscriber) {
        let newSubscribers = [];

        for (let i of subscribers) {
            if (i != subscriber) {
                newSubscribers.push(i);
            }
        }
        subscribers = newSubscribers;
    },

    notify() {
        for (let subscriber of subscribers) {
            subscriber(theme);
        }
    },

    toggleTheme() {
        if (theme === "Light") {
            theme = "Dark";
        } else {
            theme = "Light";
        }
        this.notify();
    },

    getTheme() {
        return theme;
    }

};

export default ThemeService;