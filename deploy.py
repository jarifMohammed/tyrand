import paramiko
import sys
import time

def run_command_interactive(ssh, command):
    print(f"Running: {command}")
    stdin, stdout, stderr = ssh.exec_command(command, get_pty=True)
    for line in iter(stdout.readline, ""):
        print(line, end="")
    exit_status = stdout.channel.recv_exit_status()
    print(f"\nExit Status: {exit_status}\n{'-'*40}")
    return exit_status

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
try:
    ssh.connect('187.127.138.222', username='root', password='Alchemist@11590', timeout=10)
    print("Connected without space.")
except paramiko.ssh_exception.AuthenticationException:
    print("Failed without space, trying with space...")
    ssh.connect('187.127.138.222', username='root', password=' Alchemist@11590', timeout=10)
    print("Connected with space.")
except Exception as e:
    print(f"Connection failed: {e}")
    sys.exit(1)

print("Uploading setup script...")
sftp = ssh.open_sftp()
sftp.put('remote_setup.sh', '/tmp/remote_setup.sh')
sftp.close()

run_command_interactive(ssh, "bash /tmp/remote_setup.sh")
ssh.close()
