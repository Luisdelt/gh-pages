gramatica
  = rule (nl rule)*

rule
  = name nl "=" _ choice nl ";"

choice
  = concatenacion ( nl "/"  nl concatenacion)*
  / concatenacion

concatenacion
  = expression (_ expression)*

expression
  = exp [*]?

exp
  = name
  / string
  / group

group "grupo"
  = "(" _ choice _ ")"

string
	= ["] [^"]* ["]
    / ['] [^']* [']

name "id"
  = [_a-z]i[_a-z0-9]i*

_ "whitespace"
  = [ \t]*

nl "nuevalinea"
  = [ \t\n\r]* 