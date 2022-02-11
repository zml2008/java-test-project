package ca.stellardrift.javatest;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;


class SampleTest {
    @Test
    void testSuccess() {
        assertTrue(true);
    }

    @Test
    void testWithOutput() {
        System.out.println("hello world!");
        new java.util.ArrayList();
    }

    @Disabled
    @Test
    void testFailure() {
        fail("Expected failure");
    }
}
