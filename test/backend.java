import java.io.IOException;
import java.lang.ProcessBuilder;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.InputStreamReader;
import java.util.Scanner;
import java.io.File;

public class backend {
    public static synchronized void main(String args[]) {

        ProcessBuilder pb = new ProcessBuilder();
        pb.command("cmd.exe", "/c", "g++ trinhcham1.cpp -o trinhcham1");

        try {
            Process process = pb.start();
            pb.command("trinhcham1");
            int code = process.waitFor();
            try {
                pb.command("trinhcham1");
                process = pb.start();

                BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));

                String line;
                while ((line = reader.readLine()) != null) {
                    System.out.println(line);
                }
                int exitCode = process.waitFor();
            } catch (IOException err) {
                err.printStackTrace();
            } catch (InterruptedException err) {
                err.printStackTrace();
            }

        } catch (IOException err) {
            err.printStackTrace();
        } catch (InterruptedException err) {
            err.printStackTrace();
        }
        try {
            File obj = new File("res.txt");
            Scanner myRead = new Scanner(obj);
            while (myRead.hasNextLine()) {
                String data = myRead.nextLine();
                System.out.println(data);
            }
        } catch (FileNotFoundException err) {
            err.printStackTrace();
        }
    }
}