

export const LANGUAGE_VERSION = {
    javascript:"18.15.0",
    typescript:"5.0.3",
    java:"15.0.2",
}


export const CODE_SNIPPETS = {
    javascript: `
    function greet(name) {
      return "Hello, " + name + "!";
    }
    
    console.log(greet("John"));  
    `,
    
    typescript: `
    type Params = {
      name: string;
    };
    
    function greet(data: Params): string {
      return "Hello, " + data.name + "!";
    }
    
    console.log(greet({ name: "John" }));
    `,
    
    java: `
    public class HelloWorld {
        public static void main(String[] args) {
            String name = "Alex";
            System.out.println(greet(name));
        }
        
        public static String greet(String name) {
            return "Hello, " + name + "!";
        }
    }
    `,

  };
  