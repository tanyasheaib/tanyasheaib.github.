QUnit.module( "День", {
    beforeEach: function() {
        localStorage.clear();
        globalExercisesManager=new ExercisesManager();
        globalDaysManager= new DaysManager();
        globalMealsManager= new MealsManager();
    }
});
QUnit.test( "Конструктор", function( assert ) {
    var today = new Day(new Date());
    var dateToday = new Date();
    assert.equal(today.date.toDateString(),dateToday.toDateString(),"дата одинакова");
    var yesterday = new Day(new Date("2015-03-25"));
    assert.notDeepEqual(today,yesterday,"дата не одинакова");
    today.mealsManager.addMeal(new Meal("steakT",10,10,10,10,"100г"));
    today.mealsManager.addMeal(new Meal("milkT",5,5,5,5,"одна часть"));
    today.exercisesManager.addExercise(new Exercise("runT",400));
    yesterday.mealsManager.addMeal(new Meal("steakY",10,10,10,10,"100г"));
    yesterday.mealsManager.addMeal(new Meal("milkY",5,5,5,5,"одна часть"));
    yesterday.exercisesManager.addExercise(new Exercise("runY",400));
    assert.notDeepEqual(today,yesterday,"дата не одинакова");
    assert.notEqual(today.mealsManager.getMealByID(1),yesterday.mealsManager.getMealByID(1),"продукты питания в день не равны");
    assert.equal(2,today.mealsManager.getAllMeals().length,"Длина задана правильно ");
    globalDaysManager.addDay(today);
});