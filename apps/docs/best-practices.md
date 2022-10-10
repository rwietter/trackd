## Melhores Práticas de Desenvolvimento de Software

### DRY – Don’t Repeat Yourself

DRY refere-se à metodologia de escrita de código. DRY geralmente se refere à duplicação de código. Se escrevermos a mesma lógica mais de uma vez, devemos refatorar nosso código. Uma maneira comum de DRY up de código é envolver nossa lógica duplicada com uma função e substituir todos os lugares em que o código se repete.

---

### KISS – Keep It Simple, Stupid

Normalmente, quando alguém tenta projetar uma solução para um problema. Por exemplo, um arquiteto sugere a criação de uma estrutura de microsserviços para um site simples. O Engenheiro então dirá: “Vamos mantê-lo simples, estúpido, e fazer algo mais simples”.

---

### YAGNI – You Aren’t Gonna Need It

Yagni originalmente é um acrônimo que significa "You Are't Gonna Need It". É um mantra da ExtremeProgramming que geralmente é usado em equipes de software ágeis. É uma afirmação de que alguns recursos que presumimos que nosso software precisa no futuro não devem ser construídos agora porque "você não vai precisar deles".

---

### BDUF – Big Design Up Front

BDUF é um acrônimo que significa "Big Design Up Front". É um método de desenvolvimento de software que envolve a criação de um design detalhado antes de começar a codificação. Esta sigla está aqui para nos lembrar de não nos deixarmos levar pela arquitetura super complexa. Não devemos gastar 3 meses projetando nosso aplicativo antes mesmo de escrever a primeira linha de código. Comece pequeno e itere.

---

### SOC – Separation of Concerns

Conforme citado em O'Reilly, "Separação de preocupações (SoC) é um princípio de design que gerencia a complexidade particionando o sistema de software para que cada partição seja responsável por uma preocupação separada, minimizando ao máximo a sobreposição de preocupações".

O SoC cuida de todas as preocupações do sistema, sendo qualquer parte de interesse ou foco de um programa. Já o Princípio da Responsabilidade Única (SRP) - visa separar as responsabilidades, neste caso, ter uma responsabilidade única.

---

### Abstraction Principle

Abstração é a ação ou efeito de abstrair, ou seja, de isolar mentalmente um elemento ou uma propriedade de um todo, para considerar individualmente. Na ciência da computação, o princípio da abstração é um princípio de design que visa isolar as partes do sistema de software que mudam com frequência das partes que permanecem estáveis.

> Cada parte significativa de funcionalidade em um programa deve ser implementada em apenas um local no código-fonte. Onde funções semelhantes são executadas por partes distintas de código, geralmente é benéfico combiná-las em uma, abstraindo as partes variáveis

> — Benjamin C. Pierce em Types and Programming Languages ​​(2002).

---

## SOLID

SOLID é um acrônimo que representa cinco princípios de programação orientada a objetos e design de software. Os princípios SOLID são:

- Single Responsibility Principle
- Open Closed Principle
- Liskov Substitution Principle
- Interface Segregation Principle
- Dependency Inversion Principle

### Single Responsibility Principle (SRP)

A ideia por trás do SRP é que cada classe, módulo ou função em um programa deve ter uma responsabilidade/propósito em um programa. Como definição comumente usada, "toda classe deve ter apenas um motivo para mudar".

A classe abaixo viola esse princípio, pois ela tem três responsabilidades e muita lógica interconectada que impede a reutilização do código.

```java
public class Student {

	public void registerStudent() {
		// some logic
	}

	public void calculate_Student_Results() {
		// some logic
	}

	public void sendEmail() {
		// some logic
	}
}
```

Agora se aplicarmos o SRP, teremos uma classe para cada responsabilidade, o que torna o código mais reutilizável e fácil de manter.

```java
public class StudentRegister {
	public void registerStudent() {
		// some logic
	}
}

public class StudentResults {
	public void calculate_Student_Results() {
		// some logic
	}
}

public class StudentEmail {
	public void sendEmail() {
		// some logic
	}
}
```

### Open Closed Principle (OCP)

O OCP é um princípio de design que diz que "software deve ser aberto para extensão, mas fechado para modificação". Isso significa que um software deve ser projetado de tal forma que novas funcionalidades possam ser adicionadas sem modificar o código existente.

O código abaixo tem muitas responsabilidades e apesar de extensível é possível que a classe precise ser modificada para adicionar novas funcionalidades.

```java
public enum TipoEmail {
	Texto,
	Html,
	Criptografado
}

public void class EnviarEmail(string mensagem, string assunto, TipoEmail tipo){
	if(tipo == TipoEmail.Texto)
	{
		mensagem = this.RemoverFormatacao(mensagem);
	}
	else if(tipo == TipoEmail.Html)
	{
		mensagem = this.InserirHtml(mensagem);
	}
	else if(tipo == TipoEmail.Criptografado)
	{
		mensagem = this.CriptografarMensagem(mensagem);
	}

	this.EnviarMensagem();
}
```

Uma maneira melhor de implementar o OCP é criar uma classe abstrata para cada tipo de email e implementar cada tipo de email em uma classe separada, dessa forma, quando precisar extender uma nova funcionalidade, não é necessário alterar o código da classe geral.

```java
public abstract class Email
{
	public abstract void Enviar(string assunto, string mensagem);
}

public class TextoEmail : Email
{
	public void Enviar(string assunto, string mensagem)
	{
		Util.RemoverFormatacao(mensagem);
	}
}

public class HtmlEmail : Email
{
	public void Enviar(string assunto, string mensagem)
	{
  	Util.InserirHtml(mensagem);
	}
}

public class CriptografadoEmail : Email
{
	public void Enviar(string assunto, string mensagem)
	{
		Util.CriptografarMensagem(mensagem);;
	}
}
```

### Liskov Substitution Principle (LSP)

O LSP é um princípio de design que diz que "as classes derivadas devem ser substituíveis por suas classes base". Isso significa que uma classe derivada deve ser capaz de substituir sua classe base sem quebrar o programa.

### Interface Segregation Principle (ISP)

O ISP é um princípio de design que diz que "os clientes não devem ser forçados a depender de interfaces que não usam". Isso significa que uma classe não deve ser forçada a implementar uma interface que não usa.

### Dependency Inversion Principle (DIP)

O DIP é um princípio de design que diz que "módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações". Isso significa que as classes de alto nível não devem depender das classes de baixo nível, mas as classes de alto nível devem depender de abstrações.
