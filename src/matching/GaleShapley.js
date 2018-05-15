function toObject (arr) {
  return arr.reduce((obj, [head, tail]) => {
    obj[head] = tail
    return obj
  }, {})
}

function takeFirst (arr) {
  return arr.map(([head, _]) => head)
}

function createHashTable (arr) {
  return arr.reduce((obj, [head, tail]) => {
    if (!obj[head]) {
      obj[head] = {}
    }
    return tail.reduce((_obj, item, score) => {
      _obj[head][item] = score
      return _obj
    }, obj)
  }, {})
}

function isMatchable(selectors, selecteesChoices) {
  let matchability = {};
  for (let [name, choices] of selectors) {
    matchability[name] = choices.some(c => selecteesChoices[c] && selecteesChoices[c].includes(name));
  }
  return matchability;
}

class StableMatching {
  /* figure out people who cannot be matched: to be matched,
   * at least one of one's choices need to be real and reciprocating.   */

  constructor (males, females) {
    this.maleNames = takeFirst(males)
    this.maleChoices = toObject(males)
    this.femaleNames = takeFirst(females)
    this.femaleChoices = toObject(females);
    this.maleIsMatchable = isMatchable(males, this.femaleChoices);
    this.femaleIsMatchable = isMatchable(females, this.maleChoices);
    const maxMaleMatchable = Object.values(this.maleIsMatchable).filter(a => a).length;
    const maxFemaleMatchable = Object.values(this.femaleIsMatchable).filter(a => a).length;
    this.maxMatchable = Math.min(maxMaleMatchable, maxFemaleMatchable);
    this.scores = createHashTable(females)
  }
  compareScore (male, female) {
    return (this.scores[male] && this.scores[male][female]) || Infinity
  }
  engage (state, male, female) {
    state[male] = female
    state[female] = male
  }
  breakup (state, male) {
    state[male] = ''
  }
  currentPartner (state, person) {
    return state[person]
  }
  isSingle (state, partner) {
    return state[partner] === undefined
  }
  getPreference (male) {
    return (this.maleChoices[male] && this.maleChoices[male][0]) || null
  }
  updatePreferences (male) {
    const preferences = [...this.maleChoices[male]]
    this.maleChoices[male] = preferences.slice(1, preferences.length)
  }
  terminationCondition (state) {
    const currentMatches = this.maleNames.filter((name) => {
      return this.maleIsMatchable[name] && state[name]
    }).length;
    return currentMatches === this.maxMatchable;
  }
  match (initialState = {}, depth = 0) {
    const names = this.maleNames
    const loop = (initialState = {}) => {
      return names.reduce((state, male) => {
        if (!this.isSingle(state, male)) {
          return state
        }
        if (this.maleIsMatchable[male]) {
          const female = this.getPreference(male)
          if (this.isSingle(state, female)) {
            this.engage(state, male, female)
          } else {
            const currMale = this.currentPartner(state, female)
            const score1 = this.compareScore(male, female)
            const score2 = this.compareScore(currMale, female)
            if (score1 < score2) {
              this.breakup(state, currMale)
              this.engage(state, male, female)
            }
          }
        }
        this.updatePreferences(male)
        return state
      }, initialState);
    }
    const state = loop(initialState)
    if (!this.terminationCondition(state) && depth < 10000) {
      return {...state, ...this.match(state, depth+1)}
    }
    return state
  }
}

const matchNow = function (male, females) {
  const matcher = new StableMatching(male, females);
  const matchResult = matcher.match();
  return Object.entries(matchResult).reduce((p, [name, matchWith]) => {
    if (matcher.maleChoices[name]) {
      p.push([name, matchWith]);
    } 
    return p;
  }, []);
};

export default matchNow;
