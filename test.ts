// tests go here; this will not be compiled when this package is used as an extension.
/* tests go here; this will not be compiled when this package is used as a library*/
basic.forever(() => {
    MCP23017.WritePin(0,85);
})