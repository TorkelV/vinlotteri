
var app = new Vue({
    el: '#app',
    data: {
        tickets: [],
        phoneNumber: "######",
        winner: false,
        previousWinners: [],
        ticketdrawing: false,
        uTickets: 1,
        uName: "",
    },
    components: {},
    computed: {},
    asyncComputed: {},
    watch: {},
    methods: {
        addTickets() {
            if(this.uName!=="" && this.uTickets>0) {
                this.tickets = this.tickets.concat(new Array(this.uTickets).fill(this.uName));
                this.uName = "";
                this.uTickets = 1;
            }
        },
        drawTicket() {
            let n = 0;
            if(this.winner) this.previousWinners.push(this.winner);
            for(let i =10; i<100; i++){
                setTimeout(()=>{
                    n = ~~(Math.random() * (this.tickets.length + 1));
                    this.winner = this.tickets[n];
                },40000/i)
            }
            this.removeTicket(n);
        },
        undoDrawing(i) {
            this.tickets = this.tickets.concat(this.previousWinners[i]);
            this.previousWinners.splice(i, 1);
        },
        removeTicket(draw) {
            this.tickets.splice(draw, 1);
        }
    },
    created() {
    }
});