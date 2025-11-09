package utils

import (
	"errors"
	"regexp"
	"strings"
)

// ValidateCreateUser performs minimal validation for name, email, and password.
func ValidateCreateUser(name, email, password string) error {
	if err := ValidateName(name); err != nil {
		return err
	}
	if err := ValidateEmail(email); err != nil {
		return err
	}
	if err := ValidatePassword(password); err != nil {
		return err
	}
	return nil
}

// ValidateName checks if the name is valid (non-empty, length >= 2).
func ValidateName(name string) error {
	name = strings.TrimSpace(name)
	if name == "" || len(name) < 2 {
		return errors.New("name must be at least 2 characters")
	}
	return nil
}

// ValidateEmail checks if the email is in a valid format.
func ValidateEmail(email string) error {
	email = strings.ToLower(strings.TrimSpace(email))
	var re = regexp.MustCompile(`^[^\s@]+@[^\s@]+\.[^\s@]+$`)
	if !re.MatchString(email) {
		return errors.New("invalid email")
	}
	return nil
}

// ValidatePassword checks if the password is valid (length >= 8).
func ValidatePassword(password string) error {
	if len(password) < 8 {
		return errors.New("password must be at least 8 characters")
	}
	return nil
}

