package com.acellere.corona.cmx.msg.data.nodes;

import java.util.Set;

import com.acellere.corona.cmx.msg.data.auxmod.ModelAuxmodData;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ModelClone extends ModelAuxmodData{

	private String firstLine;
	private int lineCount;
	private int hashCode;
	private int noOfBlocks;
	private int noOfFiles;
	private Set<Block> cloneBlocks;
	
	
	public ModelClone() {
	}

	@JsonCreator
	public ModelClone(@JsonProperty("firstline") String firstLine,
			@JsonProperty("linecount") int lineCount,
			@JsonProperty("hashcode") int hashCode,
			@JsonProperty("no_of_blocks") int noOfBlocks,
			@JsonProperty("no_of_files") int noOfFiles,
			@JsonProperty("cloneblocks") Set<Block> cloneBlocks) {
		this.firstLine = firstLine;
		this.lineCount = lineCount;
		this.hashCode = hashCode;
		this.noOfBlocks = noOfBlocks;
		this.noOfFiles = noOfFiles;
		this.cloneBlocks = cloneBlocks;
	}

	public String getFirstLine() {
		return firstLine;
	}

	public void setFirstLine(String firstLine) {
		this.firstLine = firstLine;
	}

	public int getLineCount() {
		return lineCount;
	}

	public void setLineCount(int lineCount) {
		this.lineCount = lineCount;
	}

	public int getHashCode() {
		return hashCode;
	}

	public void setHashCode(int hashCode) {
		this.hashCode = hashCode;
	}

	public int getNoOfBlocks() {
		return noOfBlocks;
	}

	public void setNoOfBlocks(int noOfBlocks) {
		this.noOfBlocks = noOfBlocks;
	}

	public int getNoOfFiles() {
		return noOfFiles;
	}

	public void setNoOfFiles(int noOfFiles) {
		this.noOfFiles = noOfFiles;
	}

	public Set<Block> getCloneBlocks() {
		return cloneBlocks;
	}

	public void setCloneBlocks(Set<Block> cloneBlocks) {
		this.cloneBlocks = cloneBlocks;
	}

	@Override
	public String toString() {
		return "ModelClone [firstLine=" + firstLine + ", lineCount=" + lineCount + ", hashCode=" + hashCode
				+ ", noOfBlocks=" + noOfBlocks + ", noOfFiles=" + noOfFiles + ", cloneBlocks=" + cloneBlocks + "]";
	}

	
}
