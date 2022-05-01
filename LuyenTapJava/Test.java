
interface Student {
    void run();

    void infor(String name);
}

abstract class Teacher implements Student {
    public void infor(String name) {
        System.out.println("My nam is " + name);
    }

    void Hello() {
    }
}

public class Test extends Teacher {
    public void run() {
        System.out.println("Test");
    }

    public void Hello() {
        System.out.println("hello");
    }

    public static void main(String[] args) {
        try {
            int data = 50 / 0;
            System.out.println(data);
        } catch (ArithmeticException err) {
            err.printStackTrace();
        }
        System.out.print("hello");
    }
}
