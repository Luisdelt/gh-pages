// @generated by Peggy 4.2.0.
//
// https://peggyjs.org/


function peg$subclass(child, parent) {
  function C() { this.constructor = child; }
  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  var self = Error.call(this, message);
  // istanbul ignore next Check is a necessary evil to support older environments
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(self, peg$SyntaxError.prototype);
  }
  self.expected = expected;
  self.found = found;
  self.location = location;
  self.name = "SyntaxError";
  return self;
}

peg$subclass(peg$SyntaxError, Error);

function peg$padEnd(str, targetLength, padString) {
  padString = padString || " ";
  if (str.length > targetLength) { return str; }
  targetLength -= str.length;
  padString += padString.repeat(targetLength);
  return str + padString.slice(0, targetLength);
}

peg$SyntaxError.prototype.format = function(sources) {
  var str = "Error: " + this.message;
  if (this.location) {
    var src = null;
    var k;
    for (k = 0; k < sources.length; k++) {
      if (sources[k].source === this.location.source) {
        src = sources[k].text.split(/\r\n|\n|\r/g);
        break;
      }
    }
    var s = this.location.start;
    var offset_s = (this.location.source && (typeof this.location.source.offset === "function"))
      ? this.location.source.offset(s)
      : s;
    var loc = this.location.source + ":" + offset_s.line + ":" + offset_s.column;
    if (src) {
      var e = this.location.end;
      var filler = peg$padEnd("", offset_s.line.toString().length, ' ');
      var line = src[s.line - 1];
      var last = s.line === e.line ? e.column : line.length + 1;
      var hatLen = (last - s.column) || 1;
      str += "\n --> " + loc + "\n"
          + filler + " |\n"
          + offset_s.line + " | " + line + "\n"
          + filler + " | " + peg$padEnd("", s.column - 1, ' ')
          + peg$padEnd("", hatLen, "^");
    } else {
      str += "\n at " + loc;
    }
  }
  return str;
};

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part)
          ? classEscape(part[0]) + "-" + classEscape(part[1])
          : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";
    },

    any: function() {
      return "any character";
    },

    end: function() {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g,  "\\\"")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g,  "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};

  var peg$FAILED = {};
  var peg$source = options.grammarSource;

  var peg$startRuleFunctions = { gramatica: peg$parsegramatica };
  var peg$startRuleFunction = peg$parsegramatica;

  var peg$c0 = "=";
  var peg$c1 = ";";
  var peg$c2 = "/";
  var peg$c3 = "(";
  var peg$c4 = ")";
  var peg$c5 = "[";
  var peg$c6 = "]";
  var peg$c7 = "-";

  var peg$r0 = /^[*]/;
  var peg$r1 = /^["]/;
  var peg$r2 = /^[^"]/;
  var peg$r3 = /^[']/;
  var peg$r4 = /^[^']/;
  var peg$r5 = /^[a-zA-Z0-9]/;
  var peg$r6 = /^[^\-\]]/;
  var peg$r7 = /^[_a-z]/i;
  var peg$r8 = /^[_a-z0-9]/i;
  var peg$r9 = /^[ \t]/;
  var peg$r10 = /^[ \t\n\r]/;

  var peg$e0 = peg$literalExpectation("=", false);
  var peg$e1 = peg$literalExpectation(";", false);
  var peg$e2 = peg$literalExpectation("/", false);
  var peg$e3 = peg$classExpectation(["*"], false, false);
  var peg$e4 = peg$literalExpectation("(", false);
  var peg$e5 = peg$literalExpectation(")", false);
  var peg$e6 = peg$classExpectation(["\""], false, false);
  var peg$e7 = peg$classExpectation(["\""], true, false);
  var peg$e8 = peg$classExpectation(["'"], false, false);
  var peg$e9 = peg$classExpectation(["'"], true, false);
  var peg$e10 = peg$literalExpectation("[", false);
  var peg$e11 = peg$literalExpectation("]", false);
  var peg$e12 = peg$literalExpectation("-", false);
  var peg$e13 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"]], false, false);
  var peg$e14 = peg$classExpectation(["-", "]"], true, false);
  var peg$e15 = peg$otherExpectation("id");
  var peg$e16 = peg$classExpectation(["_", ["a", "z"]], false, true);
  var peg$e17 = peg$classExpectation(["_", ["a", "z"], ["0", "9"]], false, true);
  var peg$e18 = peg$otherExpectation("whitespace");
  var peg$e19 = peg$classExpectation([" ", "\t"], false, false);
  var peg$e20 = peg$otherExpectation("nuevalinea");
  var peg$e21 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false);

  var peg$currPos = options.peg$currPos | 0;
  var peg$savedPos = peg$currPos;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$maxFailPos = peg$currPos;
  var peg$maxFailExpected = options.peg$maxFailExpected || [];
  var peg$silentFails = options.peg$silentFails | 0;

  var peg$result;

  if (options.startRule) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return {
      source: peg$source,
      start: peg$savedPos,
      end: peg$currPos
    };
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      if (pos >= peg$posDetailsCache.length) {
        p = peg$posDetailsCache.length - 1;
      } else {
        p = pos;
        while (!peg$posDetailsCache[--p]) {}
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;

      return details;
    }
  }

  function peg$computeLocation(startPos, endPos, offset) {
    var startPosDetails = peg$computePosDetails(startPos);
    var endPosDetails = peg$computePosDetails(endPos);

    var res = {
      source: peg$source,
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
    if (offset && peg$source && (typeof peg$source.offset === "function")) {
      res.start = peg$source.offset(res.start);
      res.end = peg$source.offset(res.end);
    }
    return res;
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsegramatica() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parserule();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsenl();
      s5 = peg$parserule();
      if (s5 !== peg$FAILED) {
        s4 = [s4, s5];
        s3 = s4;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsenl();
        s5 = peg$parserule();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      s1 = [s1, s2];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parserule() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parsename();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsenl();
      if (input.charCodeAt(peg$currPos) === 61) {
        s3 = peg$c0;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e0); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parse_();
        s5 = peg$parsechoice();
        if (s5 !== peg$FAILED) {
          s6 = peg$parsenl();
          if (input.charCodeAt(peg$currPos) === 59) {
            s7 = peg$c1;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e1); }
          }
          if (s7 !== peg$FAILED) {
            s1 = [s1, s2, s3, s4, s5, s6, s7];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsechoice() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parseconcatenacion();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsenl();
      if (input.charCodeAt(peg$currPos) === 47) {
        s5 = peg$c2;
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e2); }
      }
      if (s5 !== peg$FAILED) {
        s6 = peg$parsenl();
        s7 = peg$parseconcatenacion();
        if (s7 !== peg$FAILED) {
          s4 = [s4, s5, s6, s7];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsenl();
        if (input.charCodeAt(peg$currPos) === 47) {
          s5 = peg$c2;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e2); }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parsenl();
          s7 = peg$parseconcatenacion();
          if (s7 !== peg$FAILED) {
            s4 = [s4, s5, s6, s7];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      s1 = [s1, s2];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parseconcatenacion();
    }

    return s0;
  }

  function peg$parseconcatenacion() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseexpression();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse_();
      s5 = peg$parseexpression();
      if (s5 !== peg$FAILED) {
        s4 = [s4, s5];
        s3 = s4;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse_();
        s5 = peg$parseexpression();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      s1 = [s1, s2];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseexpression() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseexp();
    if (s1 !== peg$FAILED) {
      s2 = input.charAt(peg$currPos);
      if (peg$r0.test(s2)) {
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e3); }
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      s1 = [s1, s2];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseexp() {
    var s0;

    s0 = peg$parsename();
    if (s0 === peg$FAILED) {
      s0 = peg$parsestring();
      if (s0 === peg$FAILED) {
        s0 = peg$parsegroup();
        if (s0 === peg$FAILED) {
          s0 = peg$parserango();
        }
      }
    }

    return s0;
  }

  function peg$parsegroup() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 40) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e4); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      s3 = peg$parsechoice();
      if (s3 !== peg$FAILED) {
        s4 = peg$parse_();
        if (input.charCodeAt(peg$currPos) === 41) {
          s5 = peg$c4;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e5); }
        }
        if (s5 !== peg$FAILED) {
          s1 = [s1, s2, s3, s4, s5];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsestring() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = input.charAt(peg$currPos);
    if (peg$r1.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e6); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = input.charAt(peg$currPos);
      if (peg$r2.test(s3)) {
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e7); }
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = input.charAt(peg$currPos);
        if (peg$r2.test(s3)) {
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e7); }
        }
      }
      s3 = input.charAt(peg$currPos);
      if (peg$r1.test(s3)) {
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e6); }
      }
      if (s3 !== peg$FAILED) {
        s1 = [s1, s2, s3];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = input.charAt(peg$currPos);
      if (peg$r3.test(s1)) {
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e8); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = input.charAt(peg$currPos);
        if (peg$r4.test(s3)) {
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e9); }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = input.charAt(peg$currPos);
          if (peg$r4.test(s3)) {
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e9); }
          }
        }
        s3 = input.charAt(peg$currPos);
        if (peg$r3.test(s3)) {
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e8); }
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parserango() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e10); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseentrada_rango();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 93) {
          s3 = peg$c6;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e11); }
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseentrada_rango() {
    var s0, s1, s2, s3, s4;

    s0 = [];
    s1 = peg$currPos;
    s2 = peg$parsecaracter();
    if (s2 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 45) {
        s3 = peg$c7;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e12); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsecaracter();
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$parsecaracter();
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$currPos;
        s2 = peg$parsecaracter();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 45) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e12); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsecaracter();
            if (s4 !== peg$FAILED) {
              s2 = [s2, s3, s4];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 === peg$FAILED) {
          s1 = peg$parsecaracter();
        }
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecaracter() {
    var s0;

    s0 = input.charAt(peg$currPos);
    if (peg$r5.test(s0)) {
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e13); }
    }
    if (s0 === peg$FAILED) {
      s0 = input.charAt(peg$currPos);
      if (peg$r6.test(s0)) {
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e14); }
      }
    }

    return s0;
  }

  function peg$parsename() {
    var s0, s1, s2, s3;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = input.charAt(peg$currPos);
    if (peg$r7.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e16); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = input.charAt(peg$currPos);
      if (peg$r8.test(s3)) {
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e17); }
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = input.charAt(peg$currPos);
        if (peg$r8.test(s3)) {
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e17); }
        }
      }
      s1 = [s1, s2];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e15); }
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    s1 = input.charAt(peg$currPos);
    if (peg$r9.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e19); }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = input.charAt(peg$currPos);
      if (peg$r9.test(s1)) {
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e19); }
      }
    }
    peg$silentFails--;
    s1 = peg$FAILED;
    if (peg$silentFails === 0) { peg$fail(peg$e18); }

    return s0;
  }

  function peg$parsenl() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    s1 = input.charAt(peg$currPos);
    if (peg$r10.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e21); }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = input.charAt(peg$currPos);
      if (peg$r10.test(s1)) {
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e21); }
      }
    }
    peg$silentFails--;
    s1 = peg$FAILED;
    if (peg$silentFails === 0) { peg$fail(peg$e20); }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (options.peg$library) {
    return /** @type {any} */ ({
      peg$result,
      peg$currPos,
      peg$FAILED,
      peg$maxFailExpected,
      peg$maxFailPos
    });
  }
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

const peg$allowedStartRules = [
  "gramatica"
];

export {
  peg$allowedStartRules as StartRules,
  peg$SyntaxError as SyntaxError,
  peg$parse as parse
};
