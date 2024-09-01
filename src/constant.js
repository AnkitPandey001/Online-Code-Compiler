

export const LANGUAGE_VERSION = {
    javascript:"18.15.0",
    typescript:"5.0.3",
    python:"15.0.2",
    java:"15.0.2",
    csharp:"6.12.0",
    php:"8.2.3"
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
    
    python: `
    def greet(name):
        return "Hello, " + name + "!"
    
    print(greet("John"))
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
    
    csharp: `
    using System;
    
    class HelloWorld {
        static void Main(string[] args) {
            string name = "Alex";
            Console.WriteLine(greet(name));
        }
        
        static string greet(string name) {
            return "Hello, " + name + "!";
        }
    }
    `,
    
    php: `
    <?php
    $name = 'Alex';
    echo "Hello, " . $name . "!";
    ?>
    `
  };
  