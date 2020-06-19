const profileData = {
  name: 'suzanne',
  basicInfo: [
    {type: 'age', text: '26'},
    {type: 'job', text: 'Visual Artist'},
    {type: 'location', text: 'Garden City, Cairo'},
    {type: 'homeTown', text: 'Paris, France'},
  ],
  bio:
    'I love reading, my fav tv show is friends and I like jazz music, English teacher, traveling around the world.',
  about: [
    {type: 'marriage', text: 'Never Married'},
    {type: 'religion', text: 'Muslim Sunni'},
    {type: 'pray', text: 'Prays occasionally'},
    {type: 'height', text: '176 Cm'},
    {type: 'smoke', text: "Doesn't smoke"},
    {type: 'kids', text: "Doesn't have kids"},
  ],
};

export function getProfile() {
  return new Promise((res, rej) => {
    setTimeout(() => res(profileData), 2000);
  });
}
