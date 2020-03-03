package servlet;

import java.io.PrintWriter;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(
        name = "HelloServlet",
        urlPatterns = {"/hello-servlet"}
    )

public class HelloServlet extends HttpServlet
{
  @Override
   protected void doGet  (HttpServletRequest req, HttpServletResponse res)
          throws ServletException, IOException
  {
       res.setContentType("text/html"); // Tells the web container what we're sending back
       PrintWriter out = res.getWriter(); // Make it appear as if we're "writing" to the browser window
       out.println("<html>");
       out.println("<head>");
       out.println("<title>Servlet example</title>");
       out.println("</head>");
       out.println("<body>");
       out.println("<p>My first servlet.</p>");
       out.println("</body>");
       out.println("</html>");
       out.close();
  }  // end doGet()
}
