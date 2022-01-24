//1
//Новый фильм "Как натренировать своего дракона” только выпустили!
// В кассах кинотеатра много людей, стоящих в огромную очередь.
// У каждого из них есть банкнота в 100, 50 или 25 долларов.
// Билет на «Бэтмен против Супермена: На заре справедливости» стоит 25 долларов.
// Вася в настоящее время работает клерком. Он хочет продать билет каждому человеку в этой очереди.
// Может ли Вася продать каждому билет и отдать сдачу, если у него изначально нет денег и он продает билеты строго в том порядке,
// в котором люди следуют в очереди? Верните YES, если Вася может продать каждому билет и отдать сдачу. В противном случае верните NO.
// Может ли Вася продать каждому билет и отдать сдачу?

function ticket(arr) {
    const ticketPrice = 25;

    return arr.reduce((acc, bucks) => {
        return +acc >= (bucks - ticketPrice) ? +acc + ticketPrice : -1;
    }) >= 0 ? 'Yes' : 'No';
}

console.log(ticket([25, 25, 50]));
console.log(ticket([25, 100]));
console.log(ticket([25, 25, 50, 100]));
console.log(ticket([25, 50, 100]));
console.log(ticket(['25', '25', '50', '100']));
console.log(ticket(['25', '50', '100']));

module.exports = ticket;