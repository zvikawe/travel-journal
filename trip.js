
const params = new URLSearchParams(location.search);
const trip = TRIPS.find(t => t.slug === (params.get('trip') || 'lake-district')) || TRIPS[0];

document.title = `${trip.title} · Journeys`;
const hero = document.getElementById('detailHero');
hero.style.backgroundImage = `url("${trip.image}")`;
document.getElementById('tripStatus').textContent = trip.status;
document.getElementById('tripDates').textContent = trip.dates;
document.getElementById('tripTitle').textContent = trip.title;
document.getElementById('tripTagline').textContent = trip.tagline;
document.getElementById('tripFlag').textContent = trip.flag;
document.getElementById('tripNotes').textContent = trip.notes;

const facts = [
  ['Destination', trip.location],
  ['Dates', trip.dates],
  ['Highlights', trip.highlights.join(' · ')]
];
document.getElementById('facts').innerHTML = facts.map(([a,b]) =>
  `<div class="fact"><span>${a}</span><strong>${b}</strong></div>`
).join('');

document.getElementById('timeline').innerHTML = trip.days.map((day,i) => `
  <article class="day ${i===0?'open':''}">
    <div class="day-date">${day.date}</div>
    <div class="day-main">
      <h3>${day.title}</h3>
      <ul>${day.items.map(x=>`<li>${x}</li>`).join('')}</ul>
    </div>
    <div class="day-toggle">+</div>
  </article>
`).join('');

document.querySelectorAll('.day').forEach(day => {
  day.addEventListener('click', () => day.classList.toggle('open'));
});

const key = `bookings-${trip.slug}`;
const saved = JSON.parse(localStorage.getItem(key)||'{}');
document.getElementById('bookingList').innerHTML = trip.book.map((x,i)=>`
<label><input type="checkbox" data-i="${i}" ${saved[i]?'checked':''}>${x}</label>
`).join('');
document.querySelectorAll('#bookingList input').forEach(input=>{
 input.addEventListener('change',()=>{saved[input.dataset.i]=input.checked;localStorage.setItem(key,JSON.stringify(saved));});
});

const notesKey=`notes-${trip.slug}`;
const notes=document.getElementById('personalNotes');
notes.value=localStorage.getItem(notesKey)||'';
notes.addEventListener('input',()=>localStorage.setItem(notesKey,notes.value));

const starts={
'manchester':'2026-08-01','croatia':'2026-08-08','newbury':'2026-08-30',
'chichester':'2026-09-05','lake-district':'2026-09-10','lake-garda':'2026-10-08','thailand':'2026-12-24'
};
const days=Math.ceil((new Date(starts[trip.slug]+'T00:00:00')-new Date())/86400000);
document.getElementById('countdown').textContent=days>1?`${days} days to go`:days===1?'Tomorrow':days===0?'Starts today':'Trip completed';
