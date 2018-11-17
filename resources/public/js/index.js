
var app = new Vue({
    el: '#app',
    data: {
        tickets: [],
        phoneNumber: "######",
        winner: false,
        previousWinners: [],
        ticketdrawing: false,
        uTickets: 1,
        winningNumber: -1,
        uName: "",
        wColor: 'red',
        drawing: false,
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
            this.drawing = true;
            let n = 0;
            if(this.winner) this.previousWinners.push(this.winner);
            if (this.winningNumber>=0) this.removeTicket(this.winningNumber);
            this.wColor = 'red';
            for(let i =10; i<100; i++){
                setTimeout(()=>{
                    n = ~~(Math.random() * (this.tickets.length));
                    this.winner = this.tickets[n];
                    this.winningNumber = n;
                },40000/i)
            }
            setTimeout(()=>{
                this.wColor = 'green';
                this.drawing = false;
            },4000)
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