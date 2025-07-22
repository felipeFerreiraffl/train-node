/** ------ Processos ------ */

// argv - útil para projetos CLI
console.log(process.argv);

// Variáveis de ambiente
console.log(process.env);

// PID
console.log(process.pid);

// Ambiente atual
console.log(process.cwd());

// Título
console.log(process.title);

// Uso de memória
console.log(process.memoryUsage());

// Saída de eventos/processos/códigos
process.on("exit", (code) => {
  console.log(`Saindo com código: ${code}`);
});
