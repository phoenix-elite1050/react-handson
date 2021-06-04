
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileFilter;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;


public static boolean writeStreamToFile(InputStream stream, File file) {
		FileOutputStream out = null;
		try {
			out = new FileOutputStream(file);
			byte[] buffer = new byte[4096];
			int byteRead;

			while ((byteRead = stream.read(buffer)) != -1) {
				out.write(buffer, 0, byteRead);
			}
			out.close();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		} finally {
			if (out != null) {
				try {
					out.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
				out = null;
			}
		}
	}
