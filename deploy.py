import paramiko

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
except paramiko.ssh_exception.AuthenticationException:
    ssh.connect('187.127.138.222', username='root', password=' Alchemist@11590', timeout=10)

run_command_interactive(ssh, "apt-get update && apt-get install -y certbot python3-certbot-nginx")
run_command_interactive(ssh, "certbot --nginx -d tyrand.dev -d www.tyrand.dev --non-interactive --agree-tos -m mohammedjairf10@gmail.com")
ssh.close()
