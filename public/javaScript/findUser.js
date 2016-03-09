



Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
    if (err) return handleError(err);
    console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
})/**
 * Created by Marie on 09.03.2016.
 */


//http://mongoosejs.com/docs/queries.html