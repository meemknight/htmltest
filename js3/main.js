var person = 
{
    name: ['Bob', 'Smith'],
    name1: {
      firstname : 'Mihai',
      lastname: 'Georgescu'
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old.' 
            + 'He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.'
            );
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    },
};


document.getElementById("submit").addEventListener("click", (e) =>
{

  e.preventDefault();
  
  var myDataName = document.getElementById("nameInput").value; // ex. "companie"
  var myDataValue = document.getElementById("nameValue").value; // ex. "Step IT Academy"
  var a;
  
});