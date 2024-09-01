import { Box, Button, Text, } from "@chakra-ui/react";
import React, { useState } from "react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isError, setIsError] = useState(null);
  const [loading, setLoading] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    setLoading(true);
    try {
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      setIsError(true);
      setOutput(["An error occurred while running the code."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box w="50%" bg="#1a202c" color="white">
      <Button
        variant="solid"
        colorScheme="teal"
        mb={4}
        onClick={runCode}
        isLoading={loading}
        loadingText="Running"
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        p={4}
        borderRadius={4}
        border="1px solid"
        borderColor={isError ? "red.500" : "gray.600"}
        bg="#2d3748"
        overflowY="auto"
        color={isError ? "red.400" : "white"}
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : "Click Run Button To See Output"}
      </Box>
    </Box>
  );
};

export default Output;
