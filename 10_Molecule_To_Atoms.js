/*******************************************************************************
 Day 10: 3/19/2017 - Molecule to atoms

 For a given chemical formula represented by a string, count the number of
 atoms of each element contained in the molecule and return an object.

 For example:

 var water = 'H2O';
 parseMolecule(water); // return {H: 2, O: 1}

 var magnesiumHydroxide = 'Mg(OH)2';
 parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

 var fremySalt = 'K4[ON(SO3)2]2';
 parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
 As you can see, some formulas have brackets in them. The index outside the
 brackets tells you that you have to multiply count of each atom inside the
 bracket on this index. For example, in Fe(NO3)2 you have one iron atom,
 two nitrogen atoms and six oxygen atoms.

 Note that brackets may be round, square or curly and can also be nested.
 Index after the braces is optional.
*******************************************************************************/
function parseMolecule(formula) {
    var stack = [];
    var multiplier = 1;
    var atoms = {};
    var elementMultiplier = false;

    formula = formula.match(/([A-Z][a-z]?)|(\d+)|([\[\]\(\)\{\}])/g);

    formula.reverse().forEach(function(element) {
        if (/\d+/.test(element)) {
            multiplier *= parseInt(element);
            stack.push(parseInt(element));
            elementMultiplier = true;
        } else if (/[\]\)\}]/.test(element)) {
            elementMultiplier = false;
        } else if (/[\[\(\{}]/.test(element)) {
            var remove = stack.pop();
            multiplier /= remove;
        } else if (/[A-Z][a-z]?/.test(element)) {
            if (!atoms[element]) {
                atoms[element] = 0;
            }
            atoms[element] += multiplier;

            if (elementMultiplier) {
                var remove = stack.pop();
                multiplier /= remove;
                elementMultiplier = false;
            }
        }
    });
    return atoms;
}
