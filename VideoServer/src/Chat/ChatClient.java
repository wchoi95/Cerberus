package Chat;

import java.io.*;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

/**
 * FibonacciClient is a client that sends requests to the FibonacciServer
 * and interprets its replies.
 * A new FibonacciClient is "open" until the close() method is called,
 * at which point it is "closed" and may not be used further.
 */

public class ChatClient extends JPanel implements ActionListener{
	
	protected JTextField textField;
    protected JTextArea textArea;
    private final static String newline = "\n";
	private Socket socket;
    private BufferedReader in;
    private PrintWriter out;
    private Scanner s = new Scanner(System.in);
    
    // Rep invariant: socket, in, out != null
    
    /**
     * Make a FibonacciClient and connect it to a server running on
     * hostname at the specified port.
     * @throws IOException if can't connect
     */
    public ChatClient(String hostname, int port) throws IOException {
        
    	/*GUI*/
    	super(new GridBagLayout());
    	 
        textField = new JTextField(20);
        textField.addActionListener(this);
 
        textArea = new JTextArea(5, 20);
        textArea.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(textArea);
 
        //Add Components to this panel.
        GridBagConstraints c = new GridBagConstraints();
        c.gridwidth = GridBagConstraints.REMAINDER;
 
        c.fill = GridBagConstraints.HORIZONTAL;
        add(textField, c);
 
        c.fill = GridBagConstraints.BOTH;
        c.weightx = 1.0;
        c.weighty = 1.0;
        add(scrollPane, c);
    	/* before*/
    	socket = new Socket(hostname, port);
        in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        out = new PrintWriter(new OutputStreamWriter(socket.getOutputStream()));
    }
    
    public void actionPerformed(ActionEvent evt) {
    	
    	//System.out.println(s.nextLine());
    	
        String text = textField.getText();
        try {
        	System.out.println(text);
			this.sendMessage(text);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        textArea.append("\t" + text + "\n");
        textField.selectAll();
        
        //Make sure the new text is visible, even if there
        //was a selection in the text area.
        textField.setText("");
        textArea.setCaretPosition(textArea.getDocument().getLength());
    }
    
    private static void createAndShowGUI() {
        //Create and set up the window.
        JFrame frame = new JFrame("TextDemo");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
 
        //Add contents to the window.
        try {
        	ChatClient client = new ChatClient("38.88.74.71", 9001);
			frame.add(client);
        	frame.pack();
            frame.setVisible(true);
            while(true) {
            	client.getReply();
            }
                
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 
        //Display the window.
        
    }
    
    /**
     * Send a request to the server. Requires this is "open".
     * @param x to find Fibonacci(x)
     * @throws IOException if network or server failure
     */
    public void sendMessage(String x) throws IOException {
        out.print(x + "\n");
        out.flush(); // important! make sure x actually gets sent
    }
    
    /**
     * Get a reply from the next request that was submitted.
     * Requires this is "open".
     * @return the requested Fibonacci number
     * @throws IOException if network or server failure
     */
    public void getReply() throws IOException {
       String text = in.readLine();
       //System.out.println("salambro");
       if(text != null)
          textArea.append(text + newline);
       
       
    }
    /**
     * Closes the client's connection to the server.
     * This client is now "closed". Requires this is "open".
     * @throws IOException if close fails
     */
    public void close() throws IOException {
        in.close();
        out.close();
        socket.close();
    }
    
    
    
    
    private static final int N = 100;
    
    /**
     * Use a FibonacciServer to find the first N Fibonacci numbers.
     * @throws InterruptedException 
     */
    public static void main(String[] args) throws InterruptedException {
            
        
    	createAndShowGUI();
    	
    }
}
