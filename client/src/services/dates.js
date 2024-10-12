class Dates {
    formatDate(date) {
        const dateObject = new Date(date);
        return dateObject.toLocaleDateString()
    }

    formatTime(time) {
        const dateObject = new Date(time);
        return dateObject.toLocaleTimeString()
    }

    getTimeDifference(time) {
        return new Date(time) - Date.now()
    }
  
    formatRemainingTime(eventTime) {
        const diff = this.getTimeDifference(eventTime)
        if(diff < 0) {
            return this.formatNegativeTimeRemaining(eventTime)
        }
        const seconds = diff / 1000;
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;
        const months = days / 31;
        return `${Math.floor(months)} months and ${Math.floor(days % 31)} days`
    }
  
    formatNegativeTimeRemaining(eventTime) {
        const dateObject = new Date(eventTime);
        return dateObject.getTime()/1000
    }
  }
  
export const dates = new Dates();

