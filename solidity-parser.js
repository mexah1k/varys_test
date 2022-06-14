class SolidityParser {
  parse(text) {
    const parts = text.split(/(\s+)/).filter(x => x.trim().length > 0);
    console.log(parts);

    const imports = this.parseImport(parts);
    const contracts = this.parseContracts(parts);

    return {imports: imports, contracts: contracts};
  }

  parseImport(parts) {
    const res = [];

    for (let index = 1; index < parts.length; index++) {
      const prev = parts[index - 1];
      const next = parts[index + 1];
      const element = parts[index];

      if (prev === "import" && (next === ";" || element[element.length - 1] === ";")) {
        res.push(element.replace(/"/g, '').replace(";", ''));
      }
    }

    return res;
  }

  parseContracts(parts) {
    const res = [];
    for (let index = 1; index < parts.length - 1; index++) {
      const prev = parts[index - 1];
      const next = parts[index + 1];
      const element = parts[index];
      
      if (prev === "contract" && next === "{" && this.onlyLetters(element)) {
        res.push(element);
      }
    }

    return res;
  }

  onlyLetters(str) {
    return str.match("^[A-Za-z]+$");
  }
}

module.exports = SolidityParser
