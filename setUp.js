var globalMealsManager = null;
var globalDaysManager = null;
var globalExercisesManager = null;

window.addEventListener(
    "load",
    function() {
        globalMealsManager = new MealsManager();
		globalDaysManager = new DaysManager();
		globalExercisesManager = new ExercisesManager();
    }
);

QUnit.module( "Set Up" , {});
QUnit.test( "Set up managers", function( assert ) {
    assert.ok( globalMealsManager instanceof MealsManager , "Установлено" );
    assert.ok( globalExercisesManager instanceof ExercisesManager , "Установлено" );
    assert.ok( globalDaysManager instanceof DaysManager , "Установлено" );
});